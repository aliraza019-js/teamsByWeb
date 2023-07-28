import { getMessaging, getToken } from "firebase/messaging";

export const fcmPostToken = async (token: string): Promise<any> => {
  try {
    const res = await myFetch('/v2/accounts/fcm', { method: 'POST', body: { fcmToken: token } });
    console.log('posted fcm token', res);
    return res;
  }
  catch (err) {
    console.log('error posting fcm token', err);
    throw err;
  }
}

export const fcmInit = async (): Promise<any> => {
  const messaging = getMessaging();
  const config = useRuntimeConfig();

  try {
    const fcmToken = await getToken(messaging, { vapidKey: config.public.VAPID_KEY });
    console.log('got fcm token', fcmToken);
    if (fcmToken) await fcmPostToken(fcmToken);
    return 'OK';
  }
  catch (err) {
    console.log('error getting fcmToken', err);
    throw err;
  }
}
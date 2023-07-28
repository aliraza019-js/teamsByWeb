import { getMessaging, getToken } from "firebase/messaging";

export const fcmPostToken = async (token: string): Promise<any> => {
  try {
    console.log('trying to post fcm token', token);
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
    console.log('try getting fcm token');
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
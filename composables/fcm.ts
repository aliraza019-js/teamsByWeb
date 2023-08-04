import { getMessaging, getToken } from "firebase/messaging";

export const fcmPostToken = async (token: string, appVersion: any, deviceType: string): Promise<any> => {
  try {
    const res = await myFetch('/v2/accounts/fcm', { method: 'POST', body: { fcmToken: token, appVersion: appVersion || '123', deviceType: deviceType } });
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
    console.log('appVersion', config.public.APP_VERSION);
    if (fcmToken) await fcmPostToken(fcmToken, config.public.APP_VERSION, 'browser');
    return 'OK';
  }
  catch (err) {
    console.log('error getting fcmToken', err);
    throw err;
  }
}
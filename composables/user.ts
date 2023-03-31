export const userGetUser = async (): Promise<any> => {
  try {
    const res = await myFetch('/users', { method: 'GET' })
    return res
  }
  catch (err) {
    throw err
  }
}
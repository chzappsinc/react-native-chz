/**
 * @returns uuid (UQ)
 * @author  Jasim TK
 * @see chzapps.com
 * @example randomUUID() => return "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
 */
export const randomUUID = () => {
  const val = 16;
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now();
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * val) % val | 0;
      d = Math.floor(d / val);
      return (c == 'x' ? r : (r & 0x3) | 0x8).toString(val);
    },
  );
  return uuid;
};

/**
 *
 * @param {*} val must be 4/6/8
 * @returns OTP value
 * @author  Jasim TK
 * @see chzapps.com
 * @example generateOTP(4) => return 2568
 * generateOTP(6) => return  897466
 */
export const generateOTP = (val: number = 4) => {
  let otp = 0;
  val === 4
    ? (otp = Math.floor(1000 + Math.random() * 9000))
    : val === 6
    ? (otp = Math.floor(100000 + Math.random() * 900000))
    : val === 8
    ? (otp = Math.floor(10000000 + Math.random() * 90000000))
    : (otp = Math.floor(100000 + Math.random() * 900000));
  return otp;
};

/**
 *
 * @param {Number} length length of random string
 * @param {Boolean} random include Mixed chars Aa0 = true A0 = false
 * @author  Jasim TK
 * @see chzapps.com
 * @example randomString(12,true) => return "A7eIAkdsAAW1"
 */

export const randomString = (length: number, random: boolean = false) => {
  var p = random
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return [...Array(length)].reduce(
    a => a + p[~~(Math.random() * p.length)],
    '',
  );
};

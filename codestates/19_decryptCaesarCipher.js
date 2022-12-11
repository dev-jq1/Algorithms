function decryptCaesarCipher(str, secret) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    // A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
    return [...str]
        .map((el) => {
            if (el === " ") return " ";
            else {
                return alpha.indexOf(el) - secret < 0
                    ? alpha[26 + alpha.indexOf(el) - secret]
                    : alpha[alpha.indexOf(el) - secret];
            }
        })
        .join("");
}

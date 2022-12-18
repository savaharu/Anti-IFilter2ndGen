let isCorrectPass = false;

while(!isCorrectPass) {
    let pass = window.prompt('”パスワードを入力してください。”');
    if(pass == 'パスワード') {isCorrectPass = true; window.alert('ようこそ！');}
}

export function generate() {
    let ans ='';
    let a = 'qwertyuiopasdfghjklzxcvbnm!@#$%&*1234567890';
    let n = 8;
    for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random()*a.length);
        ans += a[random];
    }
    return ans;
}
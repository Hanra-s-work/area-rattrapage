async function sso() {
    const url = await window.querier.get("/oauth/login/github");
    console.log(`content = ${JSON.stringify(url)}`);
    console.log(`Received url from /oauth/login: ${url.resp}`);
    window.location.href = url.resp;
}

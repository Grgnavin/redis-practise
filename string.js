import client from './client.js';

async function init() {
    // await client.set('msg:1', 'hello from redis');
    await client.expire('msg:1', 5)
    const res = await client.get('msg:1');
    console.log(res);
}

init();
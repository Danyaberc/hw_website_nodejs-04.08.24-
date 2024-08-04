import dbRunner from './runners/db.js';
import httpRunner from './runners/http.js';
import filesRunner from './runners/files.js';
import webSockRunner from './runners/ws.js';
import rtcRunner from './runners/rtc.js';

// Всі сервера рівнозначні і не треба будувати структуру навколо http сервера

await dbRunner();
await filesRunner();
await httpRunner();
await webSockRunner();
await rtcRunner();
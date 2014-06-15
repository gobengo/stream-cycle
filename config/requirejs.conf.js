require.config({
    paths: {
        SockJS: 'lib/sockjs/sockjs',
        'event-emitter': 'lib/event-emitter/src/event-emitter',
        jquery: 'lib/jquery/dist/jquery',
        extend: 'lib/util-extend/extend',
        sinon: 'lib/sinonjs/sinon',
        chai: 'node_modules/chai/chai',
        debug: 'lib/debug/debug',
        inherits: 'lib/inherits/inherits',
        'stream-cycle': 'src/index',
        'util-extend': 'node_modules/stream-objectmode/node_modules/util-extend/extend',
        'events': 'node_modules/stream-objectmode/node_modules/events/events'
    },
    packages: [{
        name: 'stream-objectmode',
        location: 'node_modules/stream-objectmode/src',
    },{
        name: 'stream-arrays',
        location: 'node_modules/stream-arrays',
        main: 'index'
    }],
    shim: {
        SockJS: {
            exports: 'SockJS'
        },
        sinon: {
          exports: 'sinon'
        }
    }
});

var StringDecoder = require('string_decoder').StringDecoder;

function parseHeader(stream, callback) {
    stream.on(err, callback);
    stream.on('readable', onReadable);
    var decoder = new StringDecoder('utf8');
    var header = '';

    //读入数据->操作数据(取到(解析)数据-> unshift 插回合适数据)-> 继续读stream
    function onReadable() {
        var chunk;
        while (null !== (chunk = stream.read()));
        var str = decoder.write(chunk);
        //找 header 数据块
        if (str.match(/\n\n/)) {
            var split = str.split(/\n\n/);
            header += split.shift();//取出 header chunk
            var remaining = split.join('\n\n'); //联结剩下的 data chunk
            var buf = new Buffer(remaining, 'utf8');//创建 包含除 header chunk 之外的数据 的 buf
            if (buf.length)//如果这个buf不为空
            //buf 插入可读的队列
                stream.unshift(buf);//把这个buf 插回可读队列!
            stream.removeListener('error', callback);
            stream.removeListener('readable', onReadable);
            // 这时候，继续 读这个stream , 就是从body 开始了！
            callback(null, header, stream);
        } else {
            //继续找
            header += str;
        }
    }
}

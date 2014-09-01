var fstream = require('fstream'),
    tar = require('tar'),
    zlib = require('zlib');

fstream.Reader({ 'path': 'path/to/my/dir/', 'type': 'Directory' }) /* Read the source directory */
.pipe(tar.Pack()) /* Convert the directory to a .tar file */
.pipe(zlib.Gzip()) /* Compress the .tar file */
.pipe(fstream.Writer({ 'path': 'compressed_folder.tar.gz' }); /* Give the output file name */

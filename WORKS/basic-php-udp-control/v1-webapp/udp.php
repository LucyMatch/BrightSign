<!-- https://gist.github.com/smaddock/8881167889f72f0a3880ff1a1f76d33a -->
<?php
$serverIP   = '192.168.1.192';
$serverPort = 5001;
if ($_REQUEST['cmd']) {
    $socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
    if (!$socket) {
        error_log("Could not open socket");
    } else {
        socket_sendto($socket, $_REQUEST['cmd'], strlen($_REQUEST['cmd']), 0, $serverIP, $serverPort);
        socket_close($socket);
    }
}

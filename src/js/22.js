<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>系统发生错误</title>
    <meta name="robots" content="noindex,nofollow" />
    <style>
        /* Base */
        body {
            color: #333;
            font: 16px Verdana, "Helvetica Neue", helvetica, Arial, 'Microsoft YaHei', sans-serif;
            margin: 0;
            padding: 0 20px 20px;
        }
        h1{
            margin: 10px 0 0;
            font-size: 28px;
            font-weight: 500;
            line-height: 32px;
        }
        h2{
            color: #4288ce;
            font-weight: 400;
            padding: 6px 0;
            margin: 6px 0 0;
            font-size: 18px;
            border-bottom: 1px solid #eee;
        }
        h3{
            margin: 12px;
            font-size: 16px;
            font-weight: bold;
        }
        abbr{
            cursor: help;
            text-decoration: underline;
            text-decoration-style: dotted;
        }
        a{
            color: #868686;
            cursor: pointer;
        }
        a:hover{
            text-decoration: underline;
        }
        .line-error{
            background: #f8cbcb;
        }

        .echo table {
            width: 100%;
        }

        .echo pre {
            padding: 16px;
            overflow: auto;
            font-size: 85%;
            line-height: 1.45;
            background-color: #f7f7f7;
            border: 0;
            border-radius: 3px;
            font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
        }

        .echo pre > pre {
            padding: 0;
            margin: 0;
        }
    
        /* Exception Info */
        .exception {
            margin-top: 20px;
        }
        .exception .message{
            padding: 12px;
            border: 1px solid #ddd;
            border-bottom: 0 none;
            line-height: 18px;
            font-size:16px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            font-family: Consolas,"Liberation Mono",Courier,Verdana,"微软雅黑";
        }

        .exception .code{
            float: left;
            text-align: center;
            color: #fff;
            margin-right: 12px;
            padding: 16px;
            border-radius: 4px;
            background: #999;
        }
        .exception .source-code{
            padding: 6px;
            border: 1px solid #ddd;

            background: #f9f9f9;
            overflow-x: auto;

        }
        .exception .source-code pre{
            margin: 0;
        }
        .exception .source-code pre ol{
            margin: 0;
            color: #4288ce;
            display: inline-block;
            min-width: 100%;
            box-sizing: border-box;
        font-size:14px;
            font-family: "Century Gothic",Consolas,"Liberation Mono",Courier,Verdana;
            padding-left: 48px;
        }
        .exception .source-code pre li{
            border-left: 1px solid #ddd;
            height: 18px;
            line-height: 18px;
        }
        .exception .source-code pre code{
            color: #333;
            height: 100%;
            display: inline-block;
            border-left: 1px solid #fff;
        font-size:14px;
            font-family: Consolas,"Liberation Mono",Courier,Verdana,"微软雅黑";
        }
        .exception .trace{
            padding: 6px;
            border: 1px solid #ddd;
            border-top: 0 none;
            line-height: 16px;
        font-size:14px;
            font-family: Consolas,"Liberation Mono",Courier,Verdana,"微软雅黑";
        }
        .exception .trace ol{
            margin: 12px;
        }
        .exception .trace ol li{
            padding: 2px 4px;
        }
        .exception div:last-child{
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        /* Exception Variables */
        .exception-var table{
            width: 100%;
            margin: 12px 0;
            box-sizing: border-box;
            table-layout:fixed;
            word-wrap:break-word;            
        }
        .exception-var table caption{
            text-align: left;
            font-size: 16px;
            font-weight: bold;
            padding: 6px 0;
        }
        .exception-var table caption small{
            font-weight: 300;
            display: inline-block;
            margin-left: 10px;
            color: #ccc;
        }
        .exception-var table tbody{
            font-size: 13px;
            font-family: Consolas,"Liberation Mono",Courier,"微软雅黑";
        }
        .exception-var table td{
            padding: 0 6px;
            vertical-align: top;
            word-break: break-all;
        }
        .exception-var table td:first-child{
            width: 28%;
            font-weight: bold;
            white-space: nowrap;
        }
        .exception-var table td pre{
            margin: 0;
        }

        /* Copyright Info */
        .copyright{
            margin-top: 24px;
            padding: 12px 0;
            border-top: 1px solid #eee;
        }

        /* SPAN elements with the classes below are added by prettyprint. b29c18abadfeeb71ac482f85416eaf51 */
        pre.prettyprint .pln { color: #000 }  /* plain text */
        pre.prettyprint .str { color: #080 }  /* string content */
        pre.prettyprint .kwd { color: #008 }  /* a keyword */
        pre.prettyprint .com { color: #800 }  /* a comment */
        pre.prettyprint .typ { color: #606 }  /* a type name */
        pre.prettyprint .lit { color: #066 }  /* a literal value */
        /* punctuation, lisp open bracket, lisp close bracket b29c18abadfeeb71ac482f85416eaf51 */
        pre.prettyprint .pun, pre.prettyprint .opn, pre.prettyprint .clo { color: #660 }
        pre.prettyprint .tag { color: #008 }  /* a markup tag name */
        pre.prettyprint .atn { color: #606 }  /* a markup attribute name */
        pre.prettyprint .atv { color: #080 }  /* a markup attribute value */
        pre.prettyprint .dec, pre.prettyprint .var { color: #606 }  /* a declaration; a variable name */
        pre.prettyprint .fun { color: red }  /* a function name */
    </style>
</head>

<body>
    <div class="echo">
            </div>
    <div class="exception">
    <div class="message">
        
            <div class="info">
                <div>
                    <h2>[0]&nbsp;<abbr title="think\exception\HttpException">HttpException</abbr> in <a class="toggle" title="/data/www/blg.yalingba.com/wwwroot/thinkphp/library/think/route/dispatch/Url.php line 64">Url.php line 64</a></h2>
                </div>
                <div><h1>控制器不存在:2019-06-12</h1></div>
            </div>
        
    </div>
            <div class="source-code">
            <pre class="prettyprint lang-php"><ol start="55"><li class="line-55"><code>
</code></li><li class="line-56"><code>        if ($this-&gt;param['auto_search']) {
</code></li><li class="line-57"><code>            $controller = $this-&gt;autoFindController($module, $path);
</code></li><li class="line-58"><code>        } else {
</code></li><li class="line-59"><code>            // 解析控制器
</code></li><li class="line-60"><code>            $controller = !empty($path) ? array_shift($path) : null;
</code></li><li class="line-61"><code>        }
</code></li><li class="line-62"><code>
</code></li><li class="line-63"><code>        if ($controller &amp;&amp; !preg_match('/^[A-Za-z][\w|\.]*$/', $controller)) {
</code></li><li class="line-64"><code>            throw new HttpException(404, 'controller not exists:' . $controller);
</code></li><li class="line-65"><code>        }
</code></li><li class="line-66"><code>
</code></li><li class="line-67"><code>        // 解析操作
</code></li><li class="line-68"><code>        $action = !empty($path) ? array_shift($path) : null;
</code></li><li class="line-69"><code>
</code></li><li class="line-70"><code>        // 解析额外参数
</code></li><li class="line-71"><code>        if ($path) {
</code></li><li class="line-72"><code>            if ($this-&gt;rule-&gt;getConfig('url_param_type')) {
</code></li><li class="line-73"><code>                $var += $path;
</code></li></ol></pre>
        </div>
            <div class="trace">
            <h2>Call Stack</h2>
            <ol>
                <li>in <a class="toggle" title="/data/www/blg.yalingba.com/wwwroot/thinkphp/library/think/route/dispatch/Url.php line 64">Url.php line 64</a></li>
                                <li>
                at <abbr title="think\route\dispatch\Url">Url</abbr>->parseUrl('<a class="toggle" title="ggtxjs|2019-06-12|22.js">ggtxjs|2019-06-12|22...</a>') in <a class="toggle" title="/data/www/blg.yalingba.com/wwwroot/thinkphp/library/think/route/dispatch/Url.php line 23">Url.php line 23</a>                </li>
                                <li>
                at <abbr title="think\route\dispatch\Url">Url</abbr>->init() in <a class="toggle" title="/data/www/blg.yalingba.com/wwwroot/thinkphp/library/think/App.php line 402">App.php line 402</a>                </li>
                                <li>
                at <abbr title="think\App">App</abbr>->run() in <a class="toggle" title="/data/www/blg.yalingba.com/wwwroot/public/index.php line 34">index.php line 34</a>                </li>
                            </ol>
        </div>
    </div>
    
    
        <div class="exception-var">
        <h2>Environment Variables</h2>
                <table>
                        <caption>GET Data<small>empty</small></caption>
                    </table>
                <table>
                        <caption>POST Data<small>empty</small></caption>
                    </table>
                <table>
                        <caption>Files<small>empty</small></caption>
                    </table>
                <table>
                        <caption>Cookies<small>empty</small></caption>
                    </table>
                <table>
                        <caption>Session<small>empty</small></caption>
                    </table>
                <table>
                        <caption>Server/Request Data</caption>
            <tbody>
                                <tr>
                    <td>LANGUAGE</td>
                    <td>
                        en_US:en                    </td>
                </tr>
                                <tr>
                    <td>SHLVL</td>
                    <td>
                        2                    </td>
                </tr>
                                <tr>
                    <td>_</td>
                    <td>
                        /usr/bin/spawn-fcgi                    </td>
                </tr>
                                <tr>
                    <td>PATH</td>
                    <td>
                        /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin                    </td>
                </tr>
                                <tr>
                    <td>LANG</td>
                    <td>
                        en_US.UTF-8                    </td>
                </tr>
                                <tr>
                    <td>PWD</td>
                    <td>
                        /                    </td>
                </tr>
                                <tr>
                    <td>PHP_FCGI_CHILDREN</td>
                    <td>
                        6                    </td>
                </tr>
                                <tr>
                    <td>HTTP_ACCEPT_ENCODING</td>
                    <td>
                        gzip, deflate                    </td>
                </tr>
                                <tr>
                    <td>HTTP_HOST</td>
                    <td>
                        blg.yalingba.com                    </td>
                </tr>
                                <tr>
                    <td>HTTP_ACCEPT_LANGUAGE</td>
                    <td>
                        zh-CN,zh;q=0.9,en;q=0.8                    </td>
                </tr>
                                <tr>
                    <td>HTTP_REFERER</td>
                    <td>
                        https://blg.yalingba.com/ggtxjs/2019-06-12/22.js                    </td>
                </tr>
                                <tr>
                    <td>HTTP_ACCEPT</td>
                    <td>
                        text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3                    </td>
                </tr>
                                <tr>
                    <td>HTTP_USER_AGENT</td>
                    <td>
                        Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36                    </td>
                </tr>
                                <tr>
                    <td>PATH_INFO</td>
                    <td>
                                            </td>
                </tr>
                                <tr>
                    <td>REDIRECT_STATUS</td>
                    <td>
                        200                    </td>
                </tr>
                                <tr>
                    <td>SERVER_NAME</td>
                    <td>
                        blg.yalingba.com                    </td>
                </tr>
                                <tr>
                    <td>SERVER_PORT</td>
                    <td>
                        443                    </td>
                </tr>
                                <tr>
                    <td>SERVER_ADDR</td>
                    <td>
                        172.16.19.206                    </td>
                </tr>
                                <tr>
                    <td>REMOTE_PORT</td>
                    <td>
                        49121                    </td>
                </tr>
                                <tr>
                    <td>REMOTE_ADDR</td>
                    <td>
                        124.64.16.252                    </td>
                </tr>
                                <tr>
                    <td>SERVER_SOFTWARE</td>
                    <td>
                        nginx/1.8.1                    </td>
                </tr>
                                <tr>
                    <td>GATEWAY_INTERFACE</td>
                    <td>
                        CGI/1.1                    </td>
                </tr>
                                <tr>
                    <td>HTTPS</td>
                    <td>
                        on                    </td>
                </tr>
                                <tr>
                    <td>SERVER_PROTOCOL</td>
                    <td>
                        HTTP/1.1                    </td>
                </tr>
                                <tr>
                    <td>DOCUMENT_ROOT</td>
                    <td>
                        /data/www/blg.yalingba.com/wwwroot/public                    </td>
                </tr>
                                <tr>
                    <td>DOCUMENT_URI</td>
                    <td>
                        /index.php                    </td>
                </tr>
                                <tr>
                    <td>REQUEST_URI</td>
                    <td>
                        /ggtxjs/2019-06-12/22.js                    </td>
                </tr>
                                <tr>
                    <td>SCRIPT_NAME</td>
                    <td>
                        /index.php                    </td>
                </tr>
                                <tr>
                    <td>CONTENT_LENGTH</td>
                    <td>
                                            </td>
                </tr>
                                <tr>
                    <td>CONTENT_TYPE</td>
                    <td>
                                            </td>
                </tr>
                                <tr>
                    <td>REQUEST_METHOD</td>
                    <td>
                        GET                    </td>
                </tr>
                                <tr>
                    <td>QUERY_STRING</td>
                    <td>
                        s=//ggtxjs/2019-06-12/22.js                    </td>
                </tr>
                                <tr>
                    <td>SCRIPT_FILENAME</td>
                    <td>
                        /data/www/blg.yalingba.com/wwwroot/public/index.php                    </td>
                </tr>
                                <tr>
                    <td>FCGI_ROLE</td>
                    <td>
                        RESPONDER                    </td>
                </tr>
                                <tr>
                    <td>PHP_SELF</td>
                    <td>
                                            </td>
                </tr>
                                <tr>
                    <td>REQUEST_TIME_FLOAT</td>
                    <td>
                        1677312515.5212                    </td>
                </tr>
                                <tr>
                    <td>REQUEST_TIME</td>
                    <td>
                        1677312515                    </td>
                </tr>
                            </tbody>
                    </table>
                <table>
                        <caption>Environment Variables<small>empty</small></caption>
                    </table>
                <table>
                        <caption>ThinkPHP Constants</caption>
            <tbody>
                                <tr>
                    <td>APP_PATH</td>
                    <td>
                        /data/www/blg.yalingba.com/wwwroot/public/application/                    </td>
                </tr>
                                <tr>
                    <td>ROOT_PATH</td>
                    <td>
                        /data/www/blg.yalingba.com/wwwroot/                    </td>
                </tr>
                                <tr>
                    <td>IN_SYSTEM</td>
                    <td>
                        true                    </td>
                </tr>
                            </tbody>
                    </table>
            </div>
    
    <div class="copyright">
        <a title="官方网站" href="http://www.hisiphp.com">HisiPHP</a> 
        <span>V2.0.2</span> 
        <span>{ 简单·快速  稳定·安全 }</span>
    </div>

    <script>
        var LINE = 64;

        function $(selector, node){
            var elements;

            node = node || document;
            if(document.querySelectorAll){
                elements = node.querySelectorAll(selector);
            } else {
                switch(selector.substr(0, 1)){
                    case '#':
                        elements = [node.getElementById(selector.substr(1))];
                        break;
                    case '.':
                        if(document.getElementsByClassName){
                            elements = node.getElementsByClassName(selector.substr(1));
                        } else {
                            elements = get_elements_by_class(selector.substr(1), node);
                        }
                        break;
                    default:
                        elements = node.getElementsByTagName();
                }
            }
            return elements;

            function get_elements_by_class(search_class, node, tag) {
                var elements = [], eles, 
                    pattern  = new RegExp('(^|\\s)' + search_class + '(\\s|$)');

                node = node || document;
                tag  = tag  || '*';

                eles = node.getElementsByTagName(tag);
                for(var i = 0; i < eles.length; i++) {
                    if(pattern.test(eles[i].className)) {
                        elements.push(eles[i])
                    }
                }

                return elements;
            }
        }

        $.getScript = function(src, func){
            var script = document.createElement('script');
            
            script.async  = 'async';
            script.src    = src;
            script.onload = func || function(){};
            
            $('head')[0].appendChild(script);
        }

        ;(function(){
            var files = $('.toggle');
            var ol    = $('ol', $('.prettyprint')[0]);
            var li    = $('li', ol[0]);   

            // 短路径和长路径变换
            for(var i = 0; i < files.length; i++){
                files[i].ondblclick = function(){
                    var title = this.title;

                    this.title = this.innerHTML;
                    this.innerHTML = title;
                }
            }

            // 设置出错行
            var err_line = $('.line-' + LINE, ol[0])[0];
            err_line.className = err_line.className + ' line-error';

            $.getScript('//cdn.bootcss.com/prettify/r298/prettify.min.js', function(){
                prettyPrint();

                // 解决Firefox浏览器一个很诡异的问题
                // 当代码高亮后，ol的行号莫名其妙的错位
                // 但是只要刷新li里面的html重新渲染就没有问题了
                if(window.navigator.userAgent.indexOf('Firefox') >= 0){
                    ol[0].innerHTML = ol[0].innerHTML;
                }
            });

        })();
    </script>

</body>
</html>

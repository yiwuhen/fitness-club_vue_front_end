<!--
//xmlhttp��xmldom����
var DedeXHTTP = null;
var DedeXDOM = null;
var DedeContainer = null;
var DedeShowError = false;
var DedeShowWait = false;
var DedeErrCon = "";
var DedeErrDisplay = "��������ʧ��";
var DedeWaitDisplay = "������������...";

//��ȡָ��ID��Ԫ��

function $DE(id) {
    return document.getElementById(id);
}

//gcontainer �Ǳ���������ɵ����ݵ�����
//mShowError �Ƿ���ʾ������Ϣ
//DedeShowWait �Ƿ���ʾ�ȴ���Ϣ
//mErrCon ����������ʲô�ַ�����Ϊ����
//mErrDisplay ��������ʱ��ʾ����Ϣ
//mWaitDisplay �ȴ�ʱ��ʾ��Ϣ
//Ĭ�ϵ��� DedeAjax('divid',false,false,'','','')

function DedeAjax(gcontainer,mShowError,mShowWait,mErrCon,mErrDisplay,mWaitDisplay)
{

    DedeContainer = gcontainer;
    DedeShowError = mShowError;
    DedeShowWait = mShowWait;
    if(mErrCon!="") DedeErrCon = mErrCon;
    if(mErrDisplay!="") DedeErrDisplay = mErrDisplay;
    if(mErrDisplay=="x") DedeErrDisplay = "";
    if(mWaitDisplay!="") DedeWaitDisplay = mWaitDisplay;


    //post��get�������ݵļ�ֵ��
    this.keys = Array();
    this.values = Array();
    this.keyCount = -1;
    this.sendlang = 'gb2312';

    //����ͷ����
    this.rtype = 'text';

    //��ʼ��xmlhttp
    //IE6��IE5
    if(window.ActiveXObject) {
        try { DedeXHTTP = new ActiveXObject("Msxml2.XMLHTTP");} catch (e) { }
        if (DedeXHTTP == null) try { DedeXHTTP = new ActiveXObject("Microsoft.XMLHTTP");} catch (e) { }
    }
    else {
        DedeXHTTP = new XMLHttpRequest();
    }

    //����һ��POST��GET��ֵ��
    this.AddKeyN = function(skey,svalue) {
        if(this.sendlang=='utf-8') this.AddKeyUtf8(skey, svalue);
        else this.AddKey(skey, svalue);
    };
    
    this.AddKey = function(skey,svalue) {
        this.keyCount++;
        this.keys[this.keyCount] = skey;
        svalue = svalue+'';
        if(svalue != '') svalue = svalue.replace(/\+/g,'$#$');
        this.values[this.keyCount] = escape(svalue);
    };

    //����һ��POST��GET��ֵ��
    this.AddKeyUtf8 = function(skey,svalue) {
        this.keyCount++;
        this.keys[this.keyCount] = skey;
        svalue = svalue+'';
        if(svalue != '') svalue = svalue.replace(/\+/g,'$#$');
        this.values[this.keyCount] = encodeURI(svalue);
    };

    //����һ��Http����ͷ��ֵ��
    this.AddHead = function(skey,svalue) {
        this.rkeyCount++;
        this.rkeys[this.rkeyCount] = skey;
        this.rvalues[this.rkeyCount] = svalue;
    };

    //�����ǰ����Ĺ�ϣ�����
    this.ClearSet = function() {
        this.keyCount = -1;
        this.keys = Array();
        this.values = Array();
        this.rkeyCount = -1;
        this.rkeys = Array();
        this.rvalues = Array();
    };


    DedeXHTTP.onreadystatechange = function() {
        //��IE6�в�����ϻ��첽ģʽ����ִ������¼���
        if(DedeXHTTP.readyState == 4){
            if(DedeXHTTP.status == 200)
            {
                if(DedeXHTTP.responseText!=DedeErrCon) {
                    DedeContainer.innerHTML = DedeXHTTP.responseText;
                }
                else {
                    if(DedeShowError) DedeContainer.innerHTML = DedeErrDisplay;
                }
                DedeXHTTP = null;
            }
            else { if(DedeShowError) DedeContainer.innerHTML = DedeErrDisplay; }
        }
        else { if(DedeShowWait) DedeContainer.innerHTML = DedeWaitDisplay; }
    };

    //������ģʽ��״̬
    this.BarrageStat = function() {
        if(DedeXHTTP==null) return;

        if(typeof(DedeXHTTP.status)!=undefined && DedeXHTTP.status == 200)
        {
            if(DedeXHTTP.responseText!=DedeErrCon) {
                console.log(DedeXHTTP.responseText);
                DedeContainer.innerHTML = DedeXHTTP.responseText;
            }
            else {
                if(DedeShowError) DedeContainer.innerHTML = DedeErrDisplay;
            }
        }
    };

    //����http����ͷ
    this.SendHead = function()
    {
        //�����û������趨������ͷ
        if(this.rkeyCount!=-1)
        { 
            for(var i = 0;i<=this.rkeyCount;i++)
            {
                DedeXHTTP.setRequestHeader(this.rkeys[i],this.rvalues[i]);
            }
        }
        // console.log(this.rtype);
        if(this.rtype=='text'){
            DedeXHTTP.setRequestHeader("Content-Type","multipart/form-data");
        }else{
            DedeXHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
    //     ��if(this.rtype=='binary'){
    //     ��DedeXHTTP.setRequestHeader("Content-Type","multipart/form-data");
    // }else{
    //     DedeXHTTP.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // }
};

//��Post��ʽ��������
this.SendPost = function(purl) {
    var pdata = "";
    var i=0;
    this.state = 0;
    DedeXHTTP.open("POST", purl, true);
    this.SendHead();
    //post����
    if(this.keyCount!=-1)
    {
        for(;i<=this.keyCount;i++)
        {
            if(pdata=="") pdata = this.keys[i]+'='+this.values[i];
            else pdata += "&"+this.keys[i]+'='+this.values[i];
        }
    }
    DedeXHTTP.send(pdata);
};

//��GET��ʽ��������
this.SendGet = function(purl) {
    var gkey = "";
    var i=0;
    this.state = 0;
    //get����
    if(this.keyCount!=-1)
    { 
        for(;i<=this.keyCount;i++)
        {
            if(gkey=="") gkey = this.keys[i]+'='+this.values[i];
            else gkey += "&"+this.keys[i]+'='+this.values[i];
        }
        if(purl.indexOf('?')==-1) purl = purl + '?' + gkey;
        else  purl = purl + '&' + gkey;
    }
    DedeXHTTP.open("GET", purl, true);
    this.SendHead();
    DedeXHTTP.send(null);
};

//��GET��ʽ�������ݣ�����ģʽ
this.SendGet2 = function(purl) {
    var gkey = "";
    var i=0;
    this.state = 0;
    //get����
    if(this.keyCount!=-1)
    { 
        for(;i<=this.keyCount;i++)
        {
            if(gkey=="") gkey = this.keys[i]+'='+this.values[i];
            else gkey += "&"+this.keys[i]+'='+this.values[i];
        }
        if(purl.indexOf('?')==-1) purl = purl + '?' + gkey;
        else  purl = purl + '&' + gkey;
    }
    DedeXHTTP.open("GET", purl, false);
    this.SendHead();
    DedeXHTTP.send(null);
    //firefox��ֱ�Ӽ��XHTTP״̬
    this.BarrageStat();
};

//��Post��ʽ��������
this.SendPost2 = function(purl) {
    var pdata = "";
    var i=0;
    this.state = 0;
    DedeXHTTP.open("POST", purl, false);
    this.SendHead();
    //post����
    if(this.keyCount!=-1)
    {
        for(;i<=this.keyCount;i++)
        {
            if(pdata=="") pdata = this.keys[i]+'='+this.values[i];
            else pdata += "&"+this.keys[i]+'='+this.values[i];
        }
    }
    DedeXHTTP.send(pdata);
    //firefox��ֱ�Ӽ��XHTTP״̬
    this.BarrageStat();
};


} // End Class DedeAjax

//��ʼ��xmldom
function InitXDom() {
    if(DedeXDOM!=null) return;
    var obj = null;
    // Gecko��Mozilla��Firefox
    if (typeof(DOMParser) != "undefined") { 
        var parser = new DOMParser();
        obj = parser.parseFromString(xmlText, "text/xml");
    }
    // IE
    else { 
        try { obj = new ActiveXObject("MSXML2.DOMDocument");} catch (e) { }
        if (obj == null) try { obj = new ActiveXObject("Microsoft.XMLDOM"); } catch (e) { }
    }
    DedeXDOM = obj;
};



//��дcookie����
function GetCookie(c_name)
{
    if (document.cookie.length > 0)
    {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1)
        {
            c_start = c_start + c_name.length + 1;
            c_end   = document.cookie.indexOf(";",c_start);
            if (c_end == -1)
            {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return null
}

function SetCookie(c_name,value,expiredays)
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" +escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()); //ʹ���õ���Чʱ����ȷ������toGMTString()
}

-->

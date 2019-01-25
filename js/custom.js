$( document ).ready(function() {
    var symbol = "OWT";
    var web3 = new Web3('https://ropsten.infura.io/v3/67b5841e21524cc9b6d47bb88f549acb');
    
    
    var owContract = "0x6e6a3d615f023155c0b18e13cf18fa8c462e7e84";
    var _uAddress = "";
    
    var websiteFilesLimit = 20;
    
    var owAbi = [{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"},{"name":"_admin","type":"address"}],"name":"addDomainAdmin","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"claimAdminToken","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"}],"name":"claimDomain","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deListHost","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"notifyBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"},{"name":"_git","type":"string"},{"name":"_filesHash","type":"bytes32"},{"name":"_file_name","type":"bytes32[]"},{"name":"_file_hash","type":"bytes32[]"}],"name":"publishWebsite","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"},{"name":"_ttl","type":"uint256"}],"name":"registerDomain","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_connection","type":"string"}],"name":"registerHost","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"},{"name":"_admin","type":"address"}],"name":"removeDomainAdmin","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"}],"name":"renewDomain","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"},{"name":"_owner","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"saleDomain","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCost","type":"uint256"}],"name":"setHostRegistryCost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCost","type":"uint256"}],"name":"setPublishCost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCost","type":"uint256"}],"name":"setRegistryCost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_days","type":"uint256"}],"name":"setRegistryDuration","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCost","type":"uint256"}],"name":"setRenewalCost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newCost","type":"uint256"}],"name":"setUserSurfingCost","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_domain","type":"string"},{"name":"_ttl","type":"uint256"}],"name":"updateDomainTTL","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_connection","type":"string"}],"name":"updateHost","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_duration","type":"uint256"}],"name":"userSubscribe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_address","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"name":"_domain","type":"string"}],"name":"_validateDomain","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"domain_sale","outputs":[{"name":"owner","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"},{"name":"time","type":"uint256"},{"name":"expity_time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"domains","outputs":[{"name":"name","type":"string"},{"name":"admin_index","type":"uint256"},{"name":"git","type":"string"},{"name":"domain_bytes","type":"bytes32"},{"name":"hash","type":"bytes32"},{"name":"total_files","type":"uint256"},{"name":"version","type":"uint256"},{"name":"ttl","type":"uint256"},{"name":"time","type":"uint256"},{"name":"expity_time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_domain","type":"string"},{"name":"_file_name","type":"bytes32"}],"name":"getDomainFileHash","outputs":[{"name":"_hash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_domain","type":"string"}],"name":"getDomainMeta","outputs":[{"name":"_name","type":"string"},{"name":"_git","type":"string"},{"name":"_domain_bytes","type":"bytes32"},{"name":"_hash","type":"bytes32"},{"name":"_adminIndex","type":"uint256"},{"name":"_total_files","type":"uint256"},{"name":"_version","type":"uint256"},{"name":"_ttl","type":"uint256"},{"name":"_time","type":"uint256"},{"name":"_expity_time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hostAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hostConnection","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"hostConnectionDB","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hostRegistryCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"hosts","outputs":[{"name":"id","type":"uint256"},{"name":"hostAddress","type":"address"},{"name":"connection","type":"bytes32"},{"name":"active","type":"bool"},{"name":"start_time","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hostUpdates","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hostUpdatesCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastStakeMonth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastStakeYear","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"poolBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"publishCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registryCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registryDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"renewalCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"stakeBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakeLockTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalDomains","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalHosts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSubscriber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"active","type":"bool"},{"name":"start_time","type":"uint256"},{"name":"expiry_time","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"userStakeBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"userSurfingCost","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_domain","type":"string"},{"name":"_file_name","type":"bytes32"},{"name":"_file_hash","type":"bytes32"}],"name":"verifyDomainFileHash","outputs":[{"name":"_status","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"websiteFilesLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"websiteSizeLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"websiteUpdates","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"websiteUpdatesCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
    
    var ow = new web3.eth.Contract(owAbi, owContract);
    
    function _checkValidDomain(domain){
        if(domain.length <= 16){
            if(domain.includes(".")){
                return domain.split(".", 2)[1] == "ow";
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    
    function timestamp() {
        return Math.floor(Date.now() / 1000);
    }
    
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    
    function isPrivateIP(ip) {
       var parts = ip.split('.');
       return parts[0] === '10' || 
          (parts[0] === '172' && (parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31)) || 
          (parts[0] === '192' && parts[1] === '168') || 
          (parts[0] === '127');
    }

    function validIPnPort(ip) {
        var parts = ip.split(':');
        var port = parseInt(parts[1]);

        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(parts[0])) {
            if(port > 0 && port < 65535){
                return true;
            } else{
                return false;
            }
        } else {
            return false;
        }
    }
    
    function _loader(elem){
        var _text = $(elem).text();
        var _dTtext = $(elem).data("text");
        
        if(_text == ". . ."){
            $(elem).text(_dTtext);
        } else {
            $(elem).attr("data-text", _text);
            $(elem).text(". . .");
        }
        
    }
    
    function _error(el, dt){
        if(dt == ""){
            $("._errormsg."+el).text("");
        } else {
            $("._errormsg."+el).text(dt);
        }
        
    }
    
    
    
    $("._checkDomain").click(function(){
        _loader("._checkDomain");
        _error("_domianreg", "");
        
        $("._dmbox").hide();
        $("._dmboxInn").html('');
        
        var domain = $("#domain").val();
        if(domain == ""){
            _error("_domianreg", "Enter Domain Name");
            _loader("._checkDomain");
            return false;
        }
        
        if(!_checkValidDomain(domain)){
            _error("_domianreg", "Invalid Domain Name");
            _loader("._checkDomain");
            return false;
        }
        
        
        ow.methods.getDomainMeta(domain).call(
            function(err, _dt){
                _loader("._checkDomain");
                
                var _avail = true;
                var _time = timestamp();
                var expTime = parseInt(_dt._expity_time);
                
                if(expTime > _time){
                    _avail = false;
                }
                
                var _stsTxt = "is Available";
                var _stsClr = "#2FE7B1";
                var _stsIcn = "checkmark";
                if(!_avail){
                    _stsTxt = "is not Available";
                    _stsClr = "red";
                    _stsIcn = "close";
                    
                    $("._registerDomain").hide();
                } else {
                    $("._registerDomain").show();
                }
                
                $("._dmbox").show();
                $("._dmboxInn").html(' <i><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512" width="24px"><g><path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" data-original="#000000" class="active-path" data-old_color="#2FE7B1" fill="#2FE7B1"/></g> </svg></i> <b class="_dm_name">'+domain+'</b> '+_stsTxt);
            }
        );
    });
    
    $("._registerDomain").click(function(){
        var _domain = $("._dm_name").text();
        var _domainTTL = 7200;
        var _data = ow.methods.registerDomain(_domain, _domainTTL).encodeABI();
        
        var _url = "https://www.myetherwallet.com/?to="+owContract+"&value=0&data="+_data+"#send-transaction";
        openInNewTab(_url);
    });
    
    $("._subscribeInit").click(function(){
        $(this).hide();
        $("._subscribeCont").show();
    });
    
    $("._subscribe").click(function(){
        _error("_usub", "");
        
        var _uduration = parseInt($("._uduration").val());
        if(_uduration > 0 && _uduration < 400){
            //
        } else {
            _error("_usub", "Enter Valid Duration");
            return false;
        }
        
        var _data = ow.methods.userSubscribe(_uduration).encodeABI();
        
        var _url = "https://www.myetherwallet.com/?to="+owContract+"&value=0&data="+_data+"#send-transaction";
        openInNewTab(_url);
    });
    
    $("._registerHostInit").click(function(){
        $(this).hide();
        $("._regHostCont").show();
    });
    
    $("._registerHost").click(function(){
        _error("_rhost", "");
        
        var connection = $("._hconn").val();
        if(!validIPnPort(connection) || isPrivateIP(connection)){
            _error("_rhost", "Enter Valid Connection details");
            return false;
        }
        
        var _data = ow.methods.registerHost(connection).encodeABI();
        
        var _url = "https://www.myetherwallet.com/?to="+owContract+"&value=0&data="+_data+"#send-transaction";
        openInNewTab(_url);
    });
    
    $("._pubWebsiteInit").click(function(){
        $(this).hide();
        $(".__pubbxx").css("min-height", "360px");
        $("._pubWebsiteCont").show();
    });
    
    $("._pubWebsiteBtn").click(function(){
        _error("_pweb", "");
        
        var domain = $("._wDomain").val();
        var git = $("._wGit").val();
        var filesHash = $("._wFilesHash").val();
        
        if(domain == ""){
            _error("_pweb", "Enter Domain Name");
            return false;
        }
        
        if(!_checkValidDomain(domain)){
            _error("_pweb", "Invalid Domain Name");
            return false;
        }
        
        if(git == ""){
            _error("_pweb", "Enter Valid Git Repo");
            return false;
        }
        
        if(filesHash == ""){
            _error("_pweb", "Enter Valid FilesHash");
            return false;
        }
        
        var filesHashArr = filesHash.split(";");
        if(filesHashArr.length != 3){
            _error("_pweb", "Enter Valid FilesHash");
            return false;
        }
        
        var rootHash = filesHashArr[0];
        if(rootHash.length < 8){
            _error("_pweb", "Invalid Root hash");
            return false;
        }
        if(rootHash.substr(0, 2) != "0x"){ rootHash = "0x"+rootHash; }
        
        var fileNameArr = filesHashArr[1].split(",");
        var fileHashArr = filesHashArr[2].split(",");
        
        if(fileNameArr.length > websiteFilesLimit){
            _error("_pweb", "Files greater than max limit ("+websiteFilesLimit+")");
            return false;
        }
        
        if(fileNameArr.length !== fileHashArr.length){
            _error("_pweb", "File name length is not matching with file hashes");
            return false;
        }
        
        var fnbArr = [];
        fileNameArr.forEach(function(v) {
            var nameBytes = web3.utils.fromAscii(v);
            fnbArr.push(nameBytes);
        });
        
        var fhbArr = [];
        fileHashArr.forEach(function(v) {
            if(v.substr(0, 2) != "0x"){ v = "0x"+v; }
            fhbArr.push(v);
        });
        
        var _data = ow.methods.publishWebsite(domain, git, rootHash, fnbArr, fhbArr).encodeABI();
        
        var _url = "https://www.myetherwallet.com/?to="+owContract+"&value=0&data="+_data+"#send-transaction";
        openInNewTab(_url);
    });
    
//    ow.methods.balanceOf(_address).call(
//        function(error, result){
//            console.log(error);
//            if (!error) {
//                console.log('Contract Bal: ' + result);
//                var amt = web3.utils.fromWei(result, "ether");
//                $("._cBal").html("<b>"+amt+"</b> "+symbol);
//            };
//        }
//    );
});
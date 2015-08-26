+function(window, wu){
	var css = ''
		+'.wu-loading-lock{position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #eee; opacity: .5; z-index: 999999; }'
		+'.wu-loading-wp{position: fixed; top: 40%; left: 1em; right: 1em; height: 0; text-align: center; z-index: 9999999; }'
		+'.wu-loading{display: inline-block; *display:inline;*zoom:1; /* border: solid 1px #eee; */ border-radius: 3px; padding: .5em .75em; background: #fff; color: #666; box-shadow: 0 1px 7px #DDDDDD; text-shadow: 0px 1px 3px #E5E5E5; }'
		+'';
	var $loadingLock = $('<div class="wu-loading-lock">');
	var $loadingWp = $('<div class="wu-loading-wp">');
	var $loading = $('<div class="wu-loading"></div>');

	function loading(options){
		options = options||{};

		options.lock && $('body').append($loadingLock);
		$loadingWp.append($loading);
		$loading.append(options.text);
		$('body').append($loadingWp);

		return loading;
	}

	loading.remove = function(){
		$loadingLock.remove();
		$loading.remove();
	}

	wu.loading = loading;
	window.wu = wu;
}(this, this.wu||{});
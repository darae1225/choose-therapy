var U = {
    $: function(id) {
        'use strict';
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    }, 

    setText: function(id, message) {
        'use strict';
        if ( (typeof id == 'string')
        && (typeof message == 'string') ) {
    
            var output = this.$(id);
            if (!output) return false;
        
            if (output.textContent !== undefined) {
                output.textContent = message;
            } else {
                output.innerText = message;
            }
            return true;
        } 
    }, 
    
    addEvent: function(obj, type, fn) {
        'use strict';

        if (obj && obj.addEventListener) { // W3C
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) { // Older IE
            obj.attachEvent('on' + type, fn);
        }
    },
    
    removeEvent: function(obj, type, fn) {
        'use strict';

        if (obj && obj.removeEventListener) { // W3C
            obj.removeEventListener(type, fn, false);
        } else if (obj && obj.detachEvent) { // Older IE
            obj.detachEvent('on' + type, fn);
        }
    }, 

	enableTooltips: function(id) {
	    'use strict';
	
		var elem = this.$(id);

		this.addEvent(elem, 'focus', this.showTooltip);
	    this.addEvent(elem, 'mouseover', this.showTooltip);
	    this.addEvent(elem, 'blur', this.hideTooltip);
	    this.addEvent(elem, 'mouseout', this.hideTooltip);
	}, 

	showTooltip: function(e) {
	    'use strict';
	
		if (typeof e == 'undefined') var e = window.event;

        var tooltipId = 'tooltip-' + e.target.id;
        var tooltip = document.getElementById(tooltipId);
        
        tooltip.style.visibility = 'visible';
	}, 

	hideTooltip: function(e) {
	    'use strict';
	
		if (typeof e == 'undefined') var e = window.event;

        var tooltipId = 'tooltip-' + e.target.id;
        var tooltip = document.getElementById(tooltipId);
        
        tooltip.style.visibility = 'hidden';
	} 
}; 
//--------------------------------------------------------------------------
//                                                                        
//    This file is part of GenePool Swimbots.                             
//    Copyright (c) 2021 by Jeffrey Ventrella - All Rights Reserved.      
//                                                                        
//    See the README file or go to swimbots.com for full license details.           
//    You may use, distribute, and modify this code only under the terms  
//    of the "Commons Clause" license (commonsclause.com).                
//                                                                        
//    This software is intended for education, game design, and research. 
//                                                                        
// -------------------------------------------------------------------------- 

	//-----------------------------------
	// color
    // all values should be 0.0 to 1.0
	//-----------------------------------
    function Color( red, green, blue, opacity )
    {
		//	let color = new Color()  (defaults)
        if (red === undefined) {
            this.red     = 1.0;
            this.green   = 1.0;
            this.blue    = 1.0;
            this.opacity = 1.0;
        }
		//	let color = new Color( r, g, b, a )
		else {
            this.red     = red;
            this.green   = green;
            this.blue    = blue;
            this.opacity = opacity;
        }

		this.set = function( red, green, blue, opacity ) {
			this.red     = red;
			this.green   = green;
			this.blue    = blue;
			this.opacity = opacity;
		}

        // css style 'rgba' for HTML canvas rendering
        this.rgba = function() {
           return "rgba( " 
            + Math.floor( this.red   * 255 ) + ", " 
            + Math.floor( this.green * 255 ) + ", " 
            + Math.floor( this.blue  * 255 ) + ", "
            + this.opacity + ")";
        }
    }

	//-----------------------------------
	// assert
	//-----------------------------------
	function assert( assertion, string )
	{
		if ( !assertion )
		{
			alert( "assertion failed: " + string );
		} 
	}


	//-----------------------------------
	// assert integer
	//-----------------------------------
	function assertInteger( value, string )
	{
		if ( value - Math.floor( value ) > 0 )
		{
			alert( "assertInteger: value not an integer! - " + string );
		} 
	}
	
	//-----------------------------------
	// getRandomAngleInDegrees
	//-----------------------------------
	function getRandomAngleInDegrees()
	{
		return -180.0 + gpRandom() * 360.0;
	}
	

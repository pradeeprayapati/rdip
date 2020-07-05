//calcutions:
function out(){                                  
	var sel=document.getElementById('operation');
	var val=sel.options[sel.selectedIndex].value;
    var a=Number(document.getElementById('a').value);
	var b=Number(document.getElementById('b').value);
	var res;
    if(isNaN(a) || isNaN(b) || a=='' || b==""){
		alert("Invalid input.");
		return console.log("Invalid input");
	}else{
		a=Number(a.isInteger?a:a.toFixed(3));
	    b=Number(b.isInteger?a:b.toFixed(3));
		if(val == "add"){
		
		res=a+b;
		document.getElementById("b").style.display="block";
		document.getElementById("inb").style.display="block";
		document.getElementById("res").innerHTML=res;
		
	}else if(val=="subtract"){
        
        res=a-b;
		document.getElementById("b").style.display="block";
		document.getElementById("inb").style.display="block";
		document.getElementById("res").innerHTML=res;
		
	}else if(val=="multiply"){
        
        res=a*b;
		document.getElementById("b").style.display="block";
		document.getElementById("inb").style.display="block";
		document.getElementById("res").innerHTML=res;
	    
	}else if(val=="divide"){
        
        res=a/b;
		document.getElementById("b").style.display="block";
		document.getElementById("inb").style.display="block";
		document.getElementById("res").innerHTML=res;
		
	}else if(val=="percentage"){
        
        res=(a/100)*b;
		document.getElementById("b").style.display="block";
		document.getElementById("inb").style.display="block";
		document.getElementById("res").innerHTML=res;
		
	}else if(val=="absolute"){
        
		res=Math.abs(a);
		document.getElementById("b").style.display="none";
		document.getElementById("inb").style.display="none";
		document.getElementById("res").innerHTML=res;
	}else if(val=="squareroot"){
        
		res=Math.sqrt(a);
		document.getElementById("b").style.display="none";
		document.getElementById("inb").style.display="none";
		document.getElementById("res").innerHTML=res;
		
	} 
		
    }
    return console.log(res);
}

//Form Validation
function passvalues(){
      var n=document.getElementById("name").value;
      var em=document.getElementById("email").value;
      var pn=document.getElementById("phno").value;
	  if(Number(n[0])==true)
	  {
		  alert("Invalid name.Should start with a letter.");
		  return false;
    }else if(pn.length>10 || pn.length<10){
		alert("Phone num must contain 10 digits.");
		return false;
	}else{
		return true;
	}
}

//String validations:
function change(){
	var sel=document.getElementById('operation');
	var val=sel.options[sel.selectedIndex].value;
 
	if(val=="palindrome")
	{
    	document.getElementById("b").style.display="none";
		document.getElementById("inb").style.display="none";
		return 
    }else{
        document.getElementById("b").style.display="block";
		document.getElementById("inb").style.display="block";		
	    return 
	}
}
function check(){
	var sel=document.getElementById('operation');
	var val=sel.options[sel.selectedIndex].value;
    var s1=document.getElementById('a').value;
	var s2=document.getElementById('b').value;
	if(val=="palindrome"){
	if(s1!==""){
		if(s1==s1.split('').reverse().join('')){
			document.getElementById("res").innerHTML="Palindrome.";
			return console.log("true");
		}else{
			document.getElementById("res").innerHTML="Not a Palindrome.";
	        return console.log('false');	
		}	
		
	}else{
		alert("Invalid input.");
	}
	}else{
		if(s1!=="" && s2!==""){
		var s11=s1.replace(/[^\w]/g,"").toLowerCase();
		var s22=s2.replace(/[^\w]/g,"").toLowerCase();
		if(sorts(s11)===sorts(s22)){
			document.getElementById("res").innerHTML="Anagram";
			return console.log("true");
		}else{
			document.getElementById("res").innerHTML="Not an Anagram";
		    return console.log("false");
		}
    }else{
		alert("Invalid input.");
	}
}
}
function sorts(s){
	return s.split('').sort().join('');
}

//Survival Game:
function randomInt(){
	return Math.floor(Math.random()*(1000-0+1))+0;
}
function assign(){
	var a=randomInt();
	var b=randomInt();
	document.getElementById("id1").innerHTML=a;
	document.getElementById("id2").innerHTML=b;
	return 
}
function Find(){
		var x=document.getElementById("id1").innerHTML;
	var y=document.getElementById("id2").innerHTML;
	var arr=['Human','Cockroach','Nuclear bomb'];
	var a1=x%3;
	var b1=y%3;
	document.getElementById("id3").innerHTML=arr[a1];
	if(arr[a1]==arr[b1]) {
	    document.getElementById("id3").innerHTMl="TIE";
	}else if((arr[a1]=="Human" && arr[b1]=="Cockroach") || (arr[a1]=="Cockroach" && arr[b1]=="Human")){
		document.getElementById("id3").innerHTMl=arr[0];
	}else if((arr[a1]=="Cockroach" && arr[b1]=="Nuclear bomb") || (arr[a1]=="Nuclear bomb" && arr[b1]=="Cockroach")){
		document.getElementById("id3").innerHTMl=arr[1];
	}else{
	    document.getElementById("id3").innerHTMl="Human Dies";
	}
	return console.log(document.getElementById("id3").innerHTMl);
}
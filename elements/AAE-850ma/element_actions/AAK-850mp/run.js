function(instance, properties, context) {
    console.log("action running", properties.actionFileURL)
	if(properties.actionFileURL){
        var inputURL = properties.actionFileURL;
        if(!instance.data.validateUrl(inputURL) && inputURL.charAt(0)==='/'){
            inputURL = "https:"+inputURL;
        }
        console.log(inputURL);
        if(inputURL && instance.data.validateUrl(inputURL)){
            instance.data.toDataURL(inputURL, instance.data.processResult);
        }
        else{
            instance.publishState("error", true);
            instance.publishState("error_body", "Invalid URL");
        }
    
    }
    

}
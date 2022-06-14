function(instance, properties, context) {
    if(properties.file_url){
        var inputURL = properties.file_url;
        if(!instance.data.validateUrl(inputURL) && inputURL.charAt(0)==='/'){
            inputURL = "https:"+inputURL;
        }
        if(inputURL && instance.data.validateUrl(inputURL)){
            instance.data.toDataURL(inputURL, instance.data.processResult);
        }
        else{
            instance.publishState("error", true);
            instance.publishState("error_body", "Invalid URL");
        }
    
    }
	

}
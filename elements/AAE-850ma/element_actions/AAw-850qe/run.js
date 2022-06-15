function(instance, properties, context) {

	//context.uploadContent: function(fileName: String, contents: Base64 String, callback: function(err, url), [attachTo])
    var uploadComplete = function(error, link){
        if(link) {
            console.log("UPLOADED", link);
            instance.publishState("uploaded_file_url", link);
            instance.publishState("error", false);
            instance.publishState("error_body", "OK");
        }
        if(error) {
            console.log(error);
            instance.publishState("error", true);
            instance.publishState("error_body", "Failuer while Uploading Base64 File");
        }
    }
    
  	if(properties.file_name && properties.base64_string){
        context.uploadContent(properties.file_name, properties.base64_string, function(err, url){uploadComplete(err, url)});
    }
    
    //Load any data 



  //Do the operation



}
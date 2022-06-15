function(instance, context) {
	//instance.data.base64Data = "";
    instance.data.toDataURL = function(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    }
    
    instance.data.processResult = function(base64Data){
        // check the result
        // break the result into content type and base64 string
        if(!base64Data){
            console.log("Empty Response");
            instance.publishState("error", true);
            instance.publishState("error_body", "Empty Base64 Returned");
            return;
        }
        base64Data = base64Data.trim();
        var contentType = base64Data.split(';')[0].split(':')[1];
        var base64File = base64Data.split("base64,")[1];
        //console.log(contentType,base64File);
        //console.log("base64Data",base64Data);
        if(contentType.includes('/') && base64File){
            instance.publishState("file_base64", base64File);
            instance.publishState("content_type", contentType);
            instance.publishState("full_base64_string", base64Data);
            instance.publishState("error", false);
            instance.publishState("error_body", "OK");
            //console.log(contentType, base64File);
        }
        else{
            instance.publishState("error", true);
            instance.publishState("error_body", "Bad Base64 Returned");
        }
    }
    
    instance.data.validateUrl = function(inputUrl){
        let url;
        try {
            url = new URL(inputUrl);
        } catch (_) {
            return false;  
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }


}
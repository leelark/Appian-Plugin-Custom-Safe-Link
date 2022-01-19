
// Appian callbacks
$(document).ready(function () {
    Appian.Component.onNewValue(function (newValues) {
        label = newValues.label;
        url = newValues.url;
     
	 if (!url) {
          Appian.Component.setValidations(
            "URL cannot be empty for the safe Link"
          );
        }
		
		
		
		
		createLinkElement(label,url);
		
    });
     
     
});

function createLinkElement(label, url) {
        var container = document.getElementById("content-container");
		container.innerHTML = "";
		
        var linkElement = document.createElement("a");
        var link = document.createTextNode(label);

        linkElement.appendChild(link);
        linkElement.href = "#";
        
		linkElement.id = "safeLink";
		linkElement.setAttribute('download', ''); 
		linkElement.style.color = Appian.getAccentColor();
       

        container.appendChild(linkElement);
        linkElement.addEventListener("click", function () {
			window.open(url) ;
          Appian.Component.saveValue("isLinkClicked", true);
        });
      }






    This is a REACT JS project

Some tips to deploy this project

    1. Start the project with yarn start or npm start
    The project will be accessible on http://localhost:3000/

    2. There is a general component App.js which is where we call other components about presidents
    The components are inside the folder named presidents

    3. We couldn't make one or few request to have it because wikidata allows us only to request informations on singular entity names
    When you type query like "Who were the last five presidnets of USA" there is no answer. The result object is empty.

    4. Another constraint is that becausewe are passing data through the state before showing in the view, we didn't find another way to make multiple
    axios requests and pass data through the state consecutive times.

    5. When you put all the response of the request in a state object you cannot then access all the state object fields. The imbrication does not allow you to browse
    through the entire object

    6. We have limited the response of the request to one element because we saw that the other element of the response was not really important.
    The other element of the response are not directly giving informations that interested us about presidents.


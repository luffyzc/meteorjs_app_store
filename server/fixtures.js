if(Apps.find({}).count() < 1){

    var fs = Npm.require('fs');

    fs.readFile('../../../../../server/data.json', 'utf8', Meteor.bindEnvironment(function(err, data) {
        if (err) throw err;
        var newAppData = data.split("\n");
        var newApps = [];
        var recs = [];
        for (var i = 0; i < newAppData.length - 1; i++) {
            var rawAppData = JSON.parse(newAppData[i]);
            var newApp = {};

            newApp.name = rawAppData.title;
            newApp.app_id = rawAppData.app_id;
            newApp.developer = rawAppData.developer;
            newApp.description = rawAppData.intro;
            newApp.avgRating = parseInt(rawAppData.score) / 2;
            newApp.iconUrl = rawAppData.thumbnail_url;
            newApp.reccomendedApps = rawAppData.top_5_app;
            //populate the recs array
            if(newApp.reccomendedApps && newApp.reccomendedApps.length > 0) {
                for (let j = 0; j < newApp.reccomendedApps.length; j++) {
                    if(recs[newApp.reccomendedApps[j]]){
                        recs[newApp.reccomendedApps[j]]++;
                    } else {
                        recs[newApp.reccomendedApps[j]] = 1;
                    }
                }
            }
            newApp.numberOfRecommendations = 0;
            newApps.push(newApp); 
        };
        // Project Assignment code goes here

        // Now Update the numberOfRecommendations of the app based on the recs array
        for (let i = 0; i < newApps.length; i++){
            if(recs[newApps[i].app_id]){
                newApps[i].numberOfRecommendations = recs[newApps[i].app_id];
            }
            Apps.insert(newApps[i]);
        }

    }, function(err){
        throw err;
    }));
}

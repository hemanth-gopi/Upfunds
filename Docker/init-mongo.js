
var console = {};
console.log = print;

try {
	db.createUser ({
		user : "upfunds-admin",
		pwd  : "worldishell",
		roles: [{
			role: "readWrite",
			db  : "Upfunds"
		}]
	})

	db.grantRolesToUser(
		  "clusterMonitor",
		   [
		     { role: "clusterMonitor", db:"upfunds-admin"} 
		   ]
		);

	console.log("Successfully created upfunds-admin user")
} catch(e) {
  console.log("Errror occured while creating Upfunds Db",e);
}

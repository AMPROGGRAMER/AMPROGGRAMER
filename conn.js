const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://pawarranjit084:VGEZUD1VCH7LmBsh@cluster0.l5jjfvd.mongodb.net/cluster0?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected successfully to the server");

        const databaseList = await client.db().admin().listDatabases();

        console.log("Databases:");
        databaseList.databases.forEach(db => console.log(` - ${db.name}`));
    } catch (error) {
        console.error("Error connecting to the server", error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

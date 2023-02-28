import{Client} from "@xhayper/discord-rpc"

const client = new Client({
    clientId: "1024607566648578058",
    transport: { type:"ipc" }
});

export const rpcLogin = () => new Promise<Client>((reject) => {
    client.login().catch(reject)
})
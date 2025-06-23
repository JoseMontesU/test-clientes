import { Module } from "@nestjs/common";
import { ClientProxyMicroservice } from "./client.proxy";


@Module({
    providers: [ClientProxyMicroservice],
    exports: [ClientProxyMicroservice]
})

export class ProxyModule { }
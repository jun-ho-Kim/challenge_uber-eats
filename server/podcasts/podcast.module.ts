import { Module } from "../../node_modules/@nestjs/common";
import { PodcastController } from "./podcast.resolver";
import { PodcastService } from "./podcast.service";

@Module({
    controllers: [PodcastController],
    providers: [PodcastService],
})
export class PodcastModule {}
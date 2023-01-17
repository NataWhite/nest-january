import {Controller, Get} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Cars')
@Controller('car')
export class CarController {

    @Get()
    getOneCars() {
        return 'cars';
    }
}

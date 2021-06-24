
import { iRobot } from './iRobot'
import { robotPosition } from './robotPosition'


export class robot implements iRobot {

  position: robotPosition;
  minPosition: robotPosition;
  maxPosition: robotPosition;

  constructor(min:robotPosition ,max : robotPosition){
    this.position = new robotPosition(1,1);
    this.minPosition = min;
    this.maxPosition = max;
  }

  move(command: string) : any {
    let status = {
      success : true,
      error : ""
    };
    //      N
    //   E    W
    //      S
    //
    // 1 2 3 4 5 6 7 8 9 10
    // 2
    // 3
    // 4
    // 5
    for (var i = 0; i < command.length; i++) {
      switch(command.charAt(i)) {
        case 'N': {
          if(this.position.row - 1 <= this.minPosition.row){
            status.success = false;
            status.error = "Unable to move North";
          } else {
            --this.position.row;
          }
          break;
        }
        case 'E': {
          if(this.position.col - 1 <= this.minPosition.col){
            //throw error
          } else {
            --this.position.col;
          }
          break;
        }
        case 'W': {
          if(this.position.col + 1 <= this.maxPosition.col){
            //throw error
          } else {
            ++this.position.col;
          }
          break;
        }
        case 'S': {
          if(this.position.row + 1 <= this.maxPosition.row){
            //throw error
          } else {
            ++this.position.row;
          }
          break;
        }
      }
    }
    return status;
  }

}

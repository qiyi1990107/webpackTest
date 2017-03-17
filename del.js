/**
 * Created by wo on 2017/3/6.
 */
import rimraf from "rimraf";
function del() {
    rimraf(__dirname+'/dist', { nosort: true, dot: true, ignore: ['dist/.git'], },(res)=>{
        console.log(res); 
    }) 
}

del()


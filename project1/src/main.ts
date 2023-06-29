import {Utility} from "common/dist/util/utility";
export class Main
{
    public static start()
    {
        console.log("project1 start " + new Date().toLocaleString())

        new Utility();

    }
}
Main.start()
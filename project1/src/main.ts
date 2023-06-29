import {Utility} from "common/lib/util/utility";
export class Main
{
    public static start()
    {
        console.log("project1 start " + new Date().toLocaleString())

        new Utility();

    }
}
Main.start()
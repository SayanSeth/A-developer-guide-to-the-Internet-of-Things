var lastCmd = global.get('command');
var lastTemp = msg.payload.temperature;
var a = parseInt(lastTemp/10);
var b = parseInt(lastTemp%10);

switch (lastCmd)
{
    case 'on':
    {
        switch (a)
        {
            case 0:
            str1 = "\n*,*,maroon";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 1:
            str1 = "\n*,*,maroon" + "\n1,1,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 2:
            str1 = "\n*,*,maroon" + "\n1,1-2,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 3:
            str1 = "\n*,*,maroon" + "\n1,1-3,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 4:
            str1 = "\n*,*,maroon" + "\n1,1-4,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;
            case 5:
            str1 = "\n*,*,maroon" + "\n1,1-5,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;
            case 6:
            str1 = "\n*,*,maroon" + "\n1,1-6,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 7:
            str1 = "\n*,*,maroon" + "\n1,1-6,silver"+ "\n2,1,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 8:
            str1 = "\n*,*,maroon" + "\n1,1-6,silver"+ "\n2,1-2,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 9:
            str1 = "\n*,*,maroon" + "\n1,1-6,silver"+ "\n2,1-3,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            default:
            str1 = "\n*,*,maroon";
            str2 = "";
            break;

        }
break;
    }
case 'off':
    {
        switch (a)
        {
            case 0:
            str1 = "\n*,*,green";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 1:
            str1 = "\n*,*,green" + "\n1,1,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 2:
            str1 = "\n*,*,green" + "\n1,1-2,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 3:
            str1 = "\n*,*,green" + "\n1,1-3,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 4:
            str1 = "\n*,*,green" + "\n1,1-4,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;
            case 5:
            str1 = "\n*,*,green" + "\n1,1-5,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;
            case 6:
            str1 = "\n*,*,green" + "\n1,1-6,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 7:
            str1 = "\n*,*,green" + "\n1,1-6,silver"+ "\n2,1,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 8:
            str1 = "\n*,*,green" + "\n1,1-6,silver"+ "\n2,1-2,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 9:
            str1 = "\n*,*,green" + "\n1,1-6,silver"+ "\n2,1-3,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            default:
            str1 = "\n*,*,green";
            str2 = "";
            break;
        }
break;
    }
default:
    {
        switch (a)
        {
            case 0:
            str1 = "\n*,*,black";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 1:
            str1 = "\n*,*,black" + "\n1,1,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 2:
            str1 = "\n*,*,black" + "\n1,1-2,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 3:
            str1 = "\n*,*,black" + "\n1,1-3,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 4:
            str1 = "\n*,*,black" + "\n1,1-4,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;
            case 5:
            str1 = "\n*,*,black" + "\n1,1-5,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;
            case 6:
            str1 = "\n*,*,black" + "\n1,1-6,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 7:
            str1 = "\n*,*,black" + "\n1,1-6,silver"+ "\n2,1,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 8:
            str1 = "\n*,*,black" + "\n1,1-6,silver"+ "\n2,1-2,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            case 9:
            str1 = "\n*,*,black" + "\n1,1-6,silver"+ "\n2,1-3,silver";
            //
            switch (b)
{
        case 0:
        str2 = "";
        break;
        case 1:
        str2 ="\n5,1,silver";
        break;
        case 2:
        str2 ="\n5,1-2,silver";
        break;
        case 3:
        str2 ="\n5,1-3,silver";
        break;
        case 4:
        str2 ="\n5,1-4,silver";
        break;
        case 5:
        str2 ="\n5,1-5,silver";
        break;
        case 6:
        str2 ="\n5,1-6,silver";
        break;
        case 7:
        str2 ="\n5,1-6,silver"+ "\n6,1,silver";
        break;
        case 8:
        str2 ="\n5,1-6,silver"+ "\n6,1-2,silver";
        break;
        case 9:
        str2 ="\n5,1-6,silver"+ "\n6,1-3,silver";
        break;
}

            break;

            default:
            str1 = "\n*,*,black";
            str2 = "";
            break;
        }
    }
}
msg.payload = str1.concat(str2);

return msg;
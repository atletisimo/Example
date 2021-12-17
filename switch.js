let opcion=prompt(`
Izberi opcija:
1:Knigi
2:Filmovi:
3:Igri:
`)
document.write("Izbravte opcija: "+ opcion + "<br>");
switch (opcion){
    case '1':
        document.write('Maliot princ')
        break;
    case '2':
        document.write('Matrix')
        break;
    case '3':
        document.write('NFS')
        break;
    default:
        document.write("Ne validna opcija")
        break;
}
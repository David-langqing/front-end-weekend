import { read } from 'fs';

var fs = require('fs');

function splitlines(txt) {
    return txt.split('\r\n')
}

function parseline(line) {
    var arr = line.split(',')
    return{
        name: arr[0],
        subject: arr[1],
        score: parseFloat(arr[2])
    };
} 

function parseAll(txt) {
    var resule = [];
    var lines = splitlines(txt);
    var line;
    var student;

    for (var i =1; i < lines.length;i++){
        line = lines[i];
        student = parseline(line);
        result.push(student);
    }

    return result;
}

function studentCount(students) {
    var dict = {}
}
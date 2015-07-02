#!/bin/bash
if [ $(basename $(pwd)) != 'aloha' ]; then
	echo 'This script should be called from the Scripts/aloha directory'
	exit 1
fi

if [ ! -d "src" ]; then
	echo 'No src folder yet, call init.sh first'
	exit 1
fi

cd src
git checkout e54f2d24de2dd17cf47a97d98abe5914aca46ed4

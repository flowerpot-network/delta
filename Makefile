FILES := *.html css/*

default:
	./build

.PHONY: default

publish:
	./publish $(FILES)

.PHONY: publish

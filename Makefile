FILES := *.html css/*

default:
	./build

.PHONY: default

publish:
	./publish $(FILES)

deps:
	gem install redcarpet

.PHONY: publish

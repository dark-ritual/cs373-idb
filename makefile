FILES :=                              	  \
    .gitignore                            \
    .travis.yml                           \
    makefile                              \
    apiary.apib							  \
    IDB3.log                       	 	  \
    models.html                      	  \
    app/models.py                        	  \
    app/tests.py                        	  \
    UML.pdf

check:
	@not_found=0;                                 \
    for i in $(FILES);                            \
    do                                            \
        if [ -e $$i ];                            \
        then                                      \
            echo "$$i found";                     \
        else                                      \
            echo "$$i NOT FOUND";                 \
            not_found=`expr "$$not_found" + "1"`; \
        fi                                        \
    done;                                         \
    if [ $$not_found -ne 0 ];                     \
    then                                          \
        echo "$$not_found failures";              \
        exit 1;                                   \
    fi;                                           \
    echo "success";

clean:
	rm -f  .coverage
	rm -f  *.pyc
	rm -rf __pycache__

config:
	git config -l

scrub:
	make clean
	rm -f  IDB3.html
	rm -f  IDB3.log

status:
	make clean
	@echo
	git branch
	git remote -v
	git status

test: TestIDB3.tmp

IDB3-tests:
	git clone https://github.com/dark-ritual/cs373-idb.git

models.html: app/models.py
	pydoc -w models

IDB3.log:
	git log > IDB3.log

TestIDB3.tmp: app/tests.py
	coverage run    --branch app/tests.py  >  tests.tmp 2>&1
	coverage report -m --omit=/lusr/lib/python3.4/*,/home/travis/virtualenv/python*,/usr/local/lib/python3.4/*,/usr/lib/python*  >> tests.tmp
	cat tests.tmp

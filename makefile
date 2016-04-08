FILES :=                              	  \
    .gitignore                            \
    .travis.yml                           \
    makefile                              \
    apiary.apib							  \
    IDB2.log                       	 	  \
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
	rm -f  IDB2.html
	rm -f  IDB2.log

status:
	make clean
	@echo
	git branch
	git remote -v
	git status

test: TestIDB2.tmp

IDB2-tests:
	git clone https://github.com/dark-ritual/cs373-idb.git

models.html: app/models.py
	pydoc -w models

IDB2.log:
	git log > IDB2.log

TestIDB2.tmp: app/tests.py
	coverage run    --branch tests.py  >  tests.tmp 2>&1
	coverage report -m --omit='/lusr/lib/python3.4/*,/home/travis/virtualenv/python*'  >> tests.tmp
	cat tests.tmp

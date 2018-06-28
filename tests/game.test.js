/* This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

    In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

    For more information, please refer to <http://unlicense.org> */

describe('Rock Paper Scissors', function() {

    describe('game.js', function(){
        describe('getResult', function(){
            describe('rock', function() {

                it('rock should win to scissors', function() {
                    let result = getResult('rock', 'scissors');
                    expect(result).to.equal('win');
                })

                it('rock should lose to paper', function() {
                    let result = getResult('rock', 'paper');
                    expect(result).to.equal('lose');
                })

                it('rock should draw to rock', function() {
                    let result = getResult('rock', 'rock');
                    expect(result).to.equal('draw');
                })
            });

            describe('paper', function() {

                it('paper should win to rock', function() {
                    let result = getResult('paper', 'rock');
                    expect(result).to.equal('win');
                })

                it('paper should lose to scissors', function() {
                    let result = getResult('paper', 'scissors');
                    expect(result).to.equal('lose');
                })

                it('paper should draw to paper', function() {
                    let result = getResult('paper', 'paper');
                    expect(result).to.equal('draw');
                })
            });

            describe('scissors', function() {

                it('scissors should win to paper', function() {
                    let result = getResult('scissors', 'paper');
                    expect(result).to.equal('win');
                })

                it('scissors should lose to rock', function() {
                    let result = getResult('scissors', 'rock');
                    expect(result).to.equal('lose');
                })

                it('scissors should draw to scissors', function() {
                    let result = getResult('scissors', 'scissors');
                    expect(result).to.equal('draw');
                })
            });
        });


        describe('getRandom', function(){
            for (let i=1; i<5; i++) {
                it('should return a random thing from rock, paper, scissors', function() {
                    let result = getRandom();
                    let allowed = ['rock', 'paper', 'scissors']
                    expect(allowed.includes(result)).to.equal(true);
                });
            }
        });

        describe('allThings', function(){
            it('should have three elements', function() {
                expect(allThings.length).to.equal(3);
            });

            it('should have rock in it', function() {
                expect(allThings.includes('rock')).to.equal(true);
            });

            it('should have paper in it', function() {
                expect(allThings.includes('paper')).to.equal(true);
            });

            it('should have scissors in it', function() {
                expect(allThings.includes('scissors')).to.equal(true);
            });
        });
    });
});


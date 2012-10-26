(function (scope) {
    var defaultIntervals = [1e3, 2e3, 5e3, 1e4];

    function adjuster(intervals) {
        this.intervals = intervals || defaultIntervals;
        this.tries = 0;
    }

    adjuster.prototype.gtd = adjuster.prototype.getTimeoutDuration = function () {
        return this.intervals[Math.min(this.intervals.length -1, this.tries++)];
    };

    adjuster.prototype.success = function () {
        this.tries = 0;
    };

    if (scope) {
        scope.adjuster = adjuster;
    }

    return adjuster;

}(typeof window !== "undefined" ? window : null));


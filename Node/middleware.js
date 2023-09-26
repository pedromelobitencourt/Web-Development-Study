// Middleware pattern (Chain of Responsability)

const step1 = (ctx, next) => {
    ctx.value1 = 'mid1';
    next();
};

const step2 = (ctx, next) => {
    ctx.value2 = 'mid2';
    next();
};

const step3 = ctx => ctx.value3 = 'mid3';

const exec = (ctx, ...midlewares) => {
    const execStep = index => {
        (midlewares && index < midlewares.length && 
            midlewares[index](ctx, () => execStep(index + 1)))
    };
    execStep(0);
};

const ctx = {};
exec(ctx, step2, step2, step1, step3);
console.log(ctx);
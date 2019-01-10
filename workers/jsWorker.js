onmessage = function(e) {
  const code = e.data.code;
  const outputs = [];

  try {
    eval(`
      console.log = function() {
        const args = Array.prototype.slice.call(arguments);
        const output = args.reduce(function(res, arg) {
          if(arg === undefined){
            return res + ' undefined';
          }

          if(arg === null) {
            return res + ' null'
          }

          return res + ' ' + arg;
        }, '');


        outputs.push(output.trim());
      };

      ${code}
    `);
  } catch (e) {
    outputs.push(`Error : ${e}`);
  } finally {
    postMessage(outputs);
    close();
  }
};

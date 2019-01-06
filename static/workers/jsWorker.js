onmessage = function(e) {
  const code = e.data.code;
  const output = [];

  try {
    eval(`
      console.log = function() {
        const args = Array.prototype.slice.call(arguments);
        args.forEach(function(arg) {
          output.push(arg);
        });
      };

      ${code}
    `);
  } catch (e) {
    output.push(`Error : ${e}`);
  } finally {
    postMessage(output);
    close();
  }
};

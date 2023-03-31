export default (args: any) => {
    return (args && args.id && typeof(args.id) == 'string'
     && args.notebookID && typeof(args.notebookID) == 'string'
     && args.title && typeof(args.title) == 'string'
     && args.content && typeof(args.content) == 'string'
    );
} 
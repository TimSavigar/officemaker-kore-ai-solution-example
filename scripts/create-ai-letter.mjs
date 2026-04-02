import { createDocument, printCreateSummary } from '../src/officemaker-client.mjs';

const [recipientName = 'Customer', assistantName = 'Kore.ai Agent'] = process.argv.slice(2);

const documentObject = {
  type: 'document',
  content: {
    children: [
      { type: 'paragraph', children: [{ type: 'text', text: `Dear ${recipientName},` }] },
      { type: 'paragraph', children: [{ type: 'text', text: `This letter was prepared by ${assistantName} using OfficeMaker.` }] },
      { type: 'paragraph', children: [{ type: 'text', text: 'Kind regards,' }] },
      { type: 'paragraph', children: [{ type: 'text', text: assistantName }] }
    ]
  }
};

const result = await createDocument({
  documentType: 'word',
  fileName: 'kore-ai-letter',
  documentObject
});

printCreateSummary(result);
